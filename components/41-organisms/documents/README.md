# Documents

## When to use this component

Use the documents component to show and link to documents on a page related to the content of that specific page.

## When not to use this component

Do not use the documents component to show other related information than documents or to show other links than links to documents.

## How it works

The documents component uses the <a href="{{path './file-download'}}">file download component</a> to show and link to documents. The default *standalone* link style is used. The file download components are placed in a <a href="{{path './list'}}">list</a>. 

When there are more than 2 documents to show, only the first 2 documents are shown. The remaining documents are in a second list that is hidden using an <a href="{{path './accordion'}}">accordion component</a>.