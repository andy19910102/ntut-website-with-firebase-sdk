// Scripts start here...
// Create tagMap
const tagMap = {};
// Get all tags data from db
db.collection("tagList")
    .get()
    .then(docList => {
        docList.forEach(doc => {
            // doc.id => the id of document
            // doc.data() => the object data of the doc
            // console.log("[tag id]", doc.id);
            // console.log("[tag data]", doc.data());
            const tagId = doc.id;
            const tag = doc.data();
            // Save tagId as a property of tagMap
            tagMap[tagId] = tag;
        });
        // console.log("[tagMap in then func]", tagMap);
        // render product list
        renderProductList();
    })
    .catch(err => console.log("err", err));

function renderProductList() {
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

                product.tags.forEach(tagId => {
                    const tag = tagMap[tagId];
                    console.log("tag", tag);
                })

                const col = `               
                <div class="col-md-4 col-6">
                    <div class="card my-3">
                        <img class="card-img-top" src="${product.image}" alt="">
                        <div class="card-body">
                            <h4 class="card-title mb-0">${product.name}</h4>
                            <div class="category-list my-2">
                                <span class="badge badge-danger">#LIMITED</span>
                            </div>
                            <p class="price">$ 
                                <span class="text-danger">${product.salePrice}</span> 
                                <s>${product.price}</s> NTD
                            </p>
                        </div>
                        <div class="card-footer">
                            Updated at 2021.11.04 <i class="far fa-calendar-alt"></i>
                        </div>
                    </div>
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
}




