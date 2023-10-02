using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Services;
using System.Web.UI.WebControls;
using EzPay.Server;


namespace EzPay.Server
{
    public class EzPay
    {
        ExpensesAnalyticsData expensesAnalyticsDataProvider;

      public EzPay()
      {
        expensesAnalyticsDataProvider = new ExpensesAnalyticsDataProvider();
      }

        [WebMethod]
        public static ExpensesAnalyticsDataProvider Expenses_Get_Analytics_Data(bool nextReportingMonth)
        {

        // current month
          
         if(nextReportingMonth) //next month
         {
            Random random = new Random();

           expensesAnalyticsDataProvider.documents = random.Next(1, 100);
           expensesAnalyticsDataProvider.next_Report_Amount = random.Next(5, 100);
           expensesAnalyticsDataProvider.credit_Cards_Amount =random.Next(1000, 50000);
           expensesAnalyticsDataProvider.vAT_Reported =random.Next(1, 100);
                
         }


           return expensesAnalyticsDataProvider;

        

        }
    }
}