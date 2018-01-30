# Security Issues

This document explains how security issues are handled by the team that
maintains this project.

## Reporting a Security Issue

If you think that you have found a security issue in this project, do **not**
use the issue tracker and do **not** publish it publicly. Instead, all security
issues must be sent to security [at] gent.be.

## Resolving Process

For each report, we first try to confirm the vulnerability. When it is
confirmed, we will work on a solution following these steps:

* Send an acknowledgement to the reporter
* Work on a patch
* Write a security announcement for this repository about the vulnerability.
  This will be posted as a wiki page and referenced from this file. It will
  contain at least the following:
  * a title that always include the "Security release" string
  * a description of the vulnerability
  * the affected versions
  * the possible exploits
  * how to patch/upgrade/workaround affected applications
  * the CVE identifier
  * credits
* Send the patch and the announcement to the reporter for review
* Apply the patch to this project and release a new version
* Publish the wiki page on this repository
* Update the security advisory list (see below)

> Releases that include security issues should not be done on Saturday or
> Sunday, except if the vulnerability has been publicly posted.

> While we are working on a patch, please do not reveal the issue publicly.

> The resolution takes anywhere between a couple of days to a month depending on
> its complexity and the coordination with the downstream projects (see next
> paragraph).

## Security Advisories

This section indexes security vulnerabilities that were fixed in releases for
this project.
