// Scripts start here...

// Get all the documents from productList collection
db
    .collection("productList")
    .get()
    // Successfully get the data
    // .then(function(docList){})
    .then(docList => {
        // console.log("[docList]", docList);
        // loop all the doc from docList
        docList.forEach(doc => {
            // console.log("[doc]", doc);
            // Get the data object from the doc
            const product = doc.data();
            console.log("[product]", product);
            const col = `<div>
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>`;
            // Select an Element from web page
            // with an id="productList" 
            $("#productList").append(col)
        })
    })
    // If some error happened
    // .catch( function(err){} )
    .catch(err => {
        console.log("[err]", err);
    });


