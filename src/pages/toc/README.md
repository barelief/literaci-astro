
# Table of content


A script to generate a table of content. 


### Use the script with paged.js

Add the main script : 
```html
<script type="text/javascript" src="js/createToc.js"></script>
```


With paged.js, the table of content need to be generated before that paged.js fragmented the content into pages. So, you need to register the handler `beforeParsed()` and call the table of content script inside.   
Add this code in the `head` of you html document after the paged.js script:

```html
<script>
  class handlers extends Paged.Handler {
    constructor(chunker, polisher, caller) {
      super(chunker, polisher, caller);
    }

    beforeParsed(content){          
      createToc({
        content: content,
        tocElement: '#my-toc-content',
        titleElements: [ '.mw-content-ltr h2', 'h3' ]
      });
    }
    
  }
  Paged.registerHandlers(handlers);
</script>
```

The folder contain also a minimal stylesheet to add the corresponding page numbers with paged.js and add some style to the toc list:
```html
<link rel="stylesheet" type="text/css" href="css/table-of-content.css">
```

### Configuring the script
`tocElement`: define the id element where the toc list will be create
`titleElements`: array of the title element you want in the toc list. You can add as many as you want and the elements can be classes like `.title-1` or `.my-content h1`


