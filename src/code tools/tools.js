    function checkValueAndExit(item, ErrMessage) {
        try {
          item ? null : (() => { 
            throw new Error(ErrMessage); 
          })();
        } catch (err) {
          console.error(ErrMessage, err); 
          throw err; // Re-throw the error to exit the parent function
        }
        /* Function Notes
            -) It might not be needed, we are going to need a try catch anyway. 
        */
      }
