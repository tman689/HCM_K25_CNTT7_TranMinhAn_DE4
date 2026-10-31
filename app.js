let product = [
    {productCode: "PRD-001",productName: "Điện thoại Nova X1",
        brand: "Nova Mobile",stockQuantity: 120,warrrentyMonth:12},
    {productCode: "PRD-002",productName: "Máy tính bảng Nova Tab",
        brand: "Nova Mobile", stockQuantity: 35,warrrentyMonth:24},
    {productCode: "PRD-003",productName: "Tai nghe Sky Buds",       
        brand: "BlueSky Audio",stockQuantity:80,warrrentyMonth:6}
];

function ShowProduct () {
    if (product.length === 0) {
        console.log("Mảng rỗng");
        return;
    }
    for(let i = 0; i < product.length; i++){
        console.log(
            (i + 1) + " . " +
            product[i].productCode + " - " +
            product[i].productName + " - " +
            product[i].brand 

        );
        console.log(
            "| Số lượng tồn kho: " + product[i].stockQuantity,
            "| Số tháng bảo hành: " + product[i].warrrentyMonth
        );
    }
    console.log(
        " số lượng sản phẩm: "
    );
}

function NewProduct () {
    let productCode = prompt("Nhập mã sản phẩm: ");
    let productName = prompt("Nhập tên sản phẩm: ");
    let brand = prompt("Nhập tên thương hiệu: ");
    let stockQuantity = Number(prompt("Nhập số lượng máy tồn kho: "));
    let warrrentyMonth = Number(prompt("Nhập thời gian bảo hành: "));

    let NewProduct = {
        productCode: productCode,
        productName: productName,
        brand: brand,
        stockQuantity: stockQuantity,
        warrrentyMonth: warrrentyMonth,
    }
    product.push(NewProduct);
    console.log("Thêm sản phẩm thành công");
}

function UpploadProduct () {
    let productCode = prompt("Nhập mã sản phẩm muốn cập nhật: ");

    let index = findIndex(s => s.id === productCode);
    if ( index !== -1) {
        product.stockQuantity = Number(prompt("Nhập số lượng tồn kho: "));
        product.warrrentyMonth = Number(prompt("Nhập thời gian bảo hành"));
        return;
    }
    console.log("Thêm mới thành công");
}

function DeleteProduct () {
}

function main () {
    let choice;
    do {
        choice =+ prompt(`
            =======================================
                HỆ THỐNG QUẢN LÝ CỦA HÀNG TECHZONE
            =======================================
            1.Hiển thị danh sách sản phẩm
            2.Thêm mới sản phẩm
            3.Cập nhật thông tin sản phẩm
            4.Xoá sản phẩm
            5.Tìm kiếm sản phẩm theo hãng sản xuất
            0.Thoát chương trình
            =======================================
            Vui lòng nhập lựa chọn cảu bạn(0-5):
        `);
        switch (choice) {
            case 1:
                ShowProduct ()
                break;
            case 2:
                NewProduct ()
                break;
            case 3:
                UpploadProduct ()
                break;
            case 4:
                DeleteProduct ()
                break;
            case 5:
                break;
            case 0:
                console.log("Thoát chương trình thành công");
                break;
            default:
                console.log("Lựa chọn không hợp lệ! Vui lòng nhập lại");
                break;
        }
    }while (choice !== 0);
}
main();