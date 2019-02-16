using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ClinicClient
{
    public partial class MedicationPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void visitPage_Click(object sender, EventArgs e)
        {
            Response.Redirect("VisitPage.aspx");
        }
    }
}