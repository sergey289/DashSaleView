using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EzPay.Server
{
    public class ExpensesAnalyticsData
    {
            
        public int documents { get; set; }
        public decimal next_Report_Amount { get; set; }
        public decimal credit_Cards_Amount { get; set; }
        public decimal vAT_Reported { get; set; }
        
    }
}