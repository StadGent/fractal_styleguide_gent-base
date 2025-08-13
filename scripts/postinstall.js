'use strict';

const fs = require('fs-extra');
const path = require('path');

// Resolve node_modules root from a known package
const nodeModulesRootPath = path.resolve(
    require.resolve('fs-extra'),
    '../../../'
);

// Public assets root for copied vendor files
const publicRootPath = path.resolve(__dirname, '../public');

// ------------------------------------------------------------
// Copy vendor assets into /public/styleguide/vendor
// ------------------------------------------------------------
fs.removeSync(`${publicRootPath}/styleguide/vendor`);
fs.ensureDirSync(`${publicRootPath}/styleguide/vendor`);

fs.copySync(
    `${nodeModulesRootPath}/baguettebox.js`,
    `${publicRootPath}/styleguide/vendor/baguettebox`,
    { recursive: true }
);
fs.copySync(
    `${nodeModulesRootPath}/swiper`,
    `${publicRootPath}/styleguide/vendor/swiper`,
    { recursive: true }
);
fs.copySync(
    `${nodeModulesRootPath}/masonry-layout`,
    `${publicRootPath}/styleguide/vendor/masonry-layout`,
    { recursive: true }
);
fs.copySync(
    `${nodeModulesRootPath}/imagesloaded`,
    `${publicRootPath}/styleguide/vendor/imagesloaded`,
    { recursive: true }
);
fs.copySync(
    `${nodeModulesRootPath}/allietabs/dist`,
    `${publicRootPath}/styleguide/vendor/allietabs`,
    { recursive: true }
);
fs.copySync(
    `${nodeModulesRootPath}/@digipolis-gent/modal/dist`,
    `${publicRootPath}/styleguide/vendor/modal`,
    { recursive: true }
);

// ------------------------------------------------------------
// Patch @allmarkedup/fang: ensure ".md" maps to Markdown
// and not to "GCC Machine Description"
// ------------------------------------------------------------

const DOT_MD = '.md';

// 1) JSON fallback patch (some fang builds may include extensions here)
try {
    const fangJsonPath = path.join(
        nodeModulesRootPath,
        '@allmarkedup',
        'fang',
        'languages.json'
    );

    if (fs.existsSync(fangJsonPath)) {
        const content = fs.readFileSync(fangJsonPath, 'utf8');
        const data = JSON.parse(content);

        const findByName = (name) =>
            data.find((x) => (x.name || '').toLowerCase() === name.toLowerCase());

        const gcc = findByName('GCC Machine Description');
        const md = findByName('Markdown');

        let changed = false;

        // Remove ".md" from GCC Machine Description
        if (gcc && Array.isArray(gcc.extensions)) {
            const before = gcc.extensions.length;
            gcc.extensions = gcc.extensions.filter(
                (ext) => String(ext).toLowerCase() !== DOT_MD
            );
            if (gcc.extensions.length !== before) changed = true;
        }

        // Add ".md" to Markdown
        if (md) {
            const exts = new Set(
                (md.extensions || []).map((e) => String(e).toLowerCase())
            );
            if (!exts.has(DOT_MD)) {
                md.extensions = [...exts, DOT_MD];
                changed = true;
            }
        }

        if (changed) {
            fs.writeFileSync(fangJsonPath, JSON.stringify(data, null, 2), 'utf8');
            console.log(
                'Patched fang JSON: ".md" -> Markdown (removed from GCC Machine Description)'
            );
        } else {
            console.log('Fang JSON already OK or no extensions present.');
        }
    } else {
        console.warn('Fang languages.json not found; skipping JSON patch.');
    }
} catch (err) {
    console.warn('Could not patch fang languages.json:', err.message);
}

// 2) Primary patch: support/languages.yml (source of truth for extensions)
try {
    const yaml = require('js-yaml');
    const fangYamlPath = path.join(
        nodeModulesRootPath,
        '@allmarkedup',
        'fang',
        'support',
        'languages.yml'
    );

    if (fs.existsSync(fangYamlPath)) {
        const raw = fs.readFileSync(fangYamlPath, 'utf8');
        let doc = yaml.load(raw); // Can be an Array or a Map of languages

        const isArray = Array.isArray(doc);

        // Helpers to read/update entries in both structures
        const getEntry = (name) => {
            if (isArray) {
                return doc.find(
                    (e) => (e.name || '').toLowerCase() === name.toLowerCase()
                );
            }
            const key = Object.keys(doc).find(
                (k) => k.toLowerCase() === name.toLowerCase()
            );
            return key ? doc[key] : undefined;
        };

        const setEntry = (name, entry) => {
            if (isArray) {
                const idx = doc.findIndex(
                    (e) => (e.name || '').toLowerCase() === name.toLowerCase()
                );
                if (idx >= 0) doc[idx] = entry;
            } else {
                const key =
                    Object.keys(doc).find(
                        (k) => k.toLowerCase() === name.toLowerCase()
                    ) || name;
                doc[key] = entry;
            }
        };

        const gcc = getEntry('GCC Machine Description') || {};
        const md = getEntry('Markdown') || {};

        let changed = false;

        // Normalize arrays
        gcc.extensions = Array.isArray(gcc.extensions) ? gcc.extensions : [];
        md.extensions = Array.isArray(md.extensions) ? md.extensions : [];

        // Remove ".md" from GCC Machine Description
        const gccBefore = gcc.extensions.length;
        gcc.extensions = gcc.extensions.filter(
            (x) => String(x).toLowerCase() !== DOT_MD
        );
        if (gcc.extensions.length !== gccBefore) changed = true;

        // Ensure ".md" is included in Markdown
        const mdSet = new Set(md.extensions.map((x) => String(x).toLowerCase()));
        if (!mdSet.has(DOT_MD)) {
            md.extensions = [...mdSet, DOT_MD];
            changed = true;
        }

        if (changed) {
            setEntry('GCC Machine Description', gcc);
            setEntry('Markdown', md);
            fs.writeFileSync(
                fangYamlPath,
                yaml.dump(doc, { lineWidth: 1000 }),
                'utf8'
            );
            console.log(
                'Patched fang/support/languages.yml: ".md" -> Markdown (removed from GCC Machine Description)'
            );
        } else {
            console.log('Fang support YAML already OK.');
        }
    } else {
        console.warn('Fang support languages.yml not found; skipping YAML patch.');
    }
} catch (err) {
    console.warn('Could not patch fang support YAML:', err.message);
}