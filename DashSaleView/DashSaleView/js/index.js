let totalTransations;
let quantitySold = 0;
let totalSales = 0.0;
let bestSellingProduct;
let transaction = [];

$(document).ready(function () {

 

    var previousMonth = false;
    GetAnalysisDetails(previousMonth);
    ShowStatisticalData();

  $('#showCurentData').change(function () {
    let innerCircle = document.getElementById('inner-circle');
    let slider = document.querySelector('.slider');
    if (this.checked) {
        innerCircle.style.transform = "translateX(26px)";
        previousMonth = true;
        GetAnalysisDetails(previousMonth);
        slider.style.background = 'cornflowerblue';
        ShowStatisticalData();

    } else {
        innerCircle.style.transform = "translateX(0px)";
        previousMonth = false;
        GetAnalysisDetails(previousMonth);
        slider.style.background = '#ccc';
        ShowStatisticalData();
    }
});
  
});

function SetPieChartMatTwoTopPopularGoods(prodact1, prodact2) {

    new Chart(document.getElementById("adjustmentsChart"), {
        type: 'bar',
        data: {
            labels: ["Mini Cooler", "Television"],  
            datasets: [{
                label: 'Popular Goods',
                backgroundColor: ["#40F9FE", "#DC8CBF"],
                data: [prodact1, prodact2]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Popular Goods'
            },
            tooltips: {
                enabled: true,
                mode: 'index',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index];
                    }
                }
            }
        }
    });

}

function DashnoardGraphs() {

    let topTwoByQuantity;

    if (transaction.length != null && transaction.length > 0 && transaction.length > 1) {
        transaction.sort((a, b) => b.Quantity - a.Quantity);
        topTwoByQuantity = transaction.slice(0, 2);
        SetPieChartMatTwoTopPopularGoods(topTwoByQuantity[0].Quantity, topTwoByQuantity[1].Quantity);

    }
    else if (transaction.length != null && transaction.length > 0 && transaction.length == 1)
    {
        SetPieChartMatTwoTopPopularGoods(topTwoByQuantity[0].Quantity, 0);
    }    
}

function GetAnalysisDetails(previousMonth)
{

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    let monthIndex;
    
    let maxQuantity = 0;

    if (!previousMonth)
    {       
        monthIndex = date.getMonth();
        transaction = [
            {
            SLNo: "1",
            Product: "Air Condition",
            UnitPrice: "850$",  
            Quantity: 40,
            Total: 34000       
            },
            {
                SLNo: "2",
                Product: "Television",
                UnitPrice: "$320", 
                Quantity: 72,
                Total: 23040       
            },
            {
                SLNo: "3",
                Product: "Mini Cooler",
                UnitPrice: "$158",  
                Quantity: 76,
                Total: 12008       
            },
            {
                SLNo: "4",
                Product: "Refrigeration",
                UnitPrice: "$455",  
                Quantity: 33,
                Total: 15015       
            },
            {
                SLNo: "5",
                Product: "Microware",
                UnitPrice: "$160",  
                Quantity: 48,
                Total: 7680        
            },
            {
                SLNo: "6",
                Product: "Washing Machine",
                UnitPrice: "$540",  
                Quantity: 16,
                Total: 8640       
            }
        
        ];
    }else
    {
        monthIndex = date.getMonth() - 1;
        if (monthIndex === -1) { // if January
            monthIndex = 11; // set to December of the previous year
        }

        transaction = [
            {
            SLNo: "1",
            Product: "Air Condition",
            UnitPrice: "850$",  
            Quantity: 25,
            Total: 21250      
            },
            {
                SLNo: "2",
                Product: "Television",
                UnitPrice: "$320", 
                Quantity: 80,
                Total: 25600       
            },
            {
                SLNo: "3",
                Product: "Mini Cooler",
                UnitPrice: "$158",  
                Quantity: 62,
                Total: 9796       
            },
            {
                SLNo: "4",
                Product: "Refrigeration",
                UnitPrice: "$455",  
                Quantity: 23,
                Total: 10465       
            },
            {
                SLNo: "5",
                Product: "Microware",
                UnitPrice: "$160",  
                Quantity: 56,
                Total: 8960        
            },
            {
                SLNo: "6",
                Product: "Washing Machine",
                UnitPrice: "$540",  
                Quantity: 12,
                Total: 6480       
            }
        
        ];
    }
    $("#CurrentMonth").text(months[monthIndex]);
    
    transaction.forEach(element => {
        quantitySold += element.Quantity;
        totalSales += element.Total;

        if (maxQuantity < element.Quantity)
        {
            maxQuantity = element.Quantity;
            bestSellingProduct = element.Product;
        }
    });   
}

function ShowStatisticalData()
{
    $("#TotalTransations").text("58");
    $("#QuantitySold").text(quantitySold);
    $("#TotalSales").text('$' + totalSales.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    $("#BestSellingProduct").text(bestSellingProduct);

    $("#jsGrid").jsGrid({
        width: "80%",
        height: "400px",

        inserting: true,
        editing: false,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
 
        data: transaction,
 
        fields: [
            { name: "SLNo", type: "text", width: 50 },
            { name: "Product", type: "text", width: 50 },
            { name: "UnitPrice", type: "text", width: 200 },
            { name: "Quantity", type: "text" },
            { name: "Total", type: "text" },
            {type: "control"}
        ]
    });

    DashnoardGraphs(); 
}