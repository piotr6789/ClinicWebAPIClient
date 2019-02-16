using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ClinicClient
{
    public partial class VisitPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void patientPage_Click(object sender, EventArgs e)
        {
            Response.Redirect("PatientPage.aspx");
        }
    }
}