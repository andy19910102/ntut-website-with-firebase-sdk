// Scripts start here...
// Product
var $productTableBody = $("#productTableBody");
// create product
var $createProductForm = $("#createProductForm");
var $createProductName = $("#createProductName");
var $createProductPrice = $("#createProductPrice");
var $createProductSalePrice = $("#createProductSalePrice");
var $createProductUseSalePrice = $("#createProductUseSalePrice");



// Tag
// select an element with id="tagTableBody"
var $tagTableBody = $("#tagTableBody");
// create tag
var $createTagForm = $("#createTagForm");
var $createTagName = $("#createTagName");
var $createTagColor = $("#createTagColor");

// Binding the event that user submitted $createTagForm
$createTagForm.submit(function (e) {
    // prevent default behavior of browser
    e.preventDefault();
    console.log("New Tag Form Submitted !");
    const tag = {
        name: $createTagName.val(),
        color: $createTagColor.val()
    };
    // Add tag to tagList collection
    db.collection("tagList").add(tag)
        .then(() => {
            // refresh page 
            window.location.reload();
        })
        .catch(err => console.log(err));
});

const tagList = [];

db.collection("tagList").get()
    .then(docList => {
        docList.forEach(doc => {
            const tag = doc.data();
            const tagId = doc.id;
            tag['id'] = tagId;
            // Add tag(object) to tagList(array)
            tagList.push(tag);
        });
        renderTagList();
    })
    .catch(err => console.log("err", err));

function renderTagList() {
    tagList.forEach(tag => {
        const tableRow = `<tr>
            <td>${tag.name}</td>
            <td>
                <div class="color-box bg-${tag.color}"></div>
            </td>
            <td>
                <button class="btn btn-warning">Update</button>
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>`;
        $tagTableBody.append(tableRow);
    })
}
