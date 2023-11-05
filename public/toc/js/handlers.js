class handlers extends Paged.Handler {
    constructor(chunker, polisher, caller) {
      super(chunker, polisher, caller);
    }

    beforeParsed(content){          
      createToc({
        content: content,
        tocElement: '#my-toc-content',
        titleElements: [ '.mw-content-ltr h2' ]
      });
    }
   
  }
  Paged.registerHandlers(handlers);