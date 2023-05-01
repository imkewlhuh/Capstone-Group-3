import "../../css/dashboard.css";

export default function DashBoard() {
    //Product Table Data
    const products = [
        [
            "", "PRODUCT", "ITEMS", "PRICE", "STATUS", "ACTION"
        ],
        [
            "/images/shoe.jpg", { name: "Shoe", SKU: "BD-76854335" }, 324, "89.99", "In Stock", "Out of stock"
        ],
        [
            "/images/hat.jpg", { name: "Hat", SKU: "BD-76854336" }, 231, "19.99", "In Stock", ""
        ],
        [
            "/images/watch.jpg", { name: "Watch", SKU: "BD-76854337" }, 197, "119.99", "In Stock", ""
        ]
    ];

    return (
        <div className="dashboard container">

            {/*Header*/}
            <header className="header">
                <div className="search">
                    <i className="bi bi-arrow-left"></i>
                    <input className="searchBar" type="text" placeholder="search" />
                </div>
                <div className="user">
                    <i className="bi bi-bell bell"></i>
                    <i className="bi bi-person-circle"></i>
                </div>
            </header>
            <hr />


            {/*Sub Header*/}
            <div className="subHeader mb-3">
                <h2>Top Selling Items</h2>
                <div className="subButtons">
                    <button type="button" className="dashlet">Add Dashlet +</button>
                    <button type="button" className="export">Export</button>
                </div>
            </div>


            {/*Content*/}
            <div className="content">
                {/*Product Table*/}
                <div className="productTable">
                    <table className="table table-sm">
                        {
                            products.map((product, i) => {
                                if (i === 0) {
                                    return (
                                        <thead key={i}>
                                            <tr>
                                                {
                                                    product.map(title => {
                                                        return (
                                                            <th key={title}>{title}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                    );
                                } else {
                                    return (
                                        <tbody key={i}>
                                            <tr>
                                                {
                                                    product.map((row, j) => {
                                                        if (j === 0) {
                                                            return (
                                                                <th key={j + 10}><img style={{ maxWidth: "70px" }} src={row} /></th>
                                                            );
                                                        } else if (j === 1) {
                                                            return (
                                                                <td key={j + 20}>
                                                                    <p>{row.name}</p>
                                                                    <p style={{ color: "#40A0F9" }}>{row.SKU}</p>
                                                                </td>
                                                            );
                                                        } else if (j === 4) {
                                                            return (
                                                                <td>
                                                                    <div className="statusBox">{row}</div>
                                                                </td>
                                                            );
                                                        } else if (j === 5 && row != "") {
                                                            return (
                                                                <td>
                                                                    <div className="actionBox">{row}</div>
                                                                </td>
                                                            );
                                                        } else {
                                                            return (
                                                                <td key={j + 40}>{row}</td>
                                                            );
                                                        };
                                                    })
                                                }
                                            </tr>
                                        </tbody>
                                    );
                                };
                            })
                        }
                    </table>
                </div>

                {/*Sales Overview*/}


                {/*Purchase Overview*/}


                {/*Inventory Summary*/}


                {/*Product Overview*/}


                {/*No. of Users*/}


                {/*Sales v Purchases stats*/}


            </div>
        </div>
    )
}