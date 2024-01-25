using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ShopWatches.Models;

namespace ShopWatches.Controllers
{
    public class ThongKeController : Controller
    {
        public ActionResult Index()
        {
            var model = new ThongKeViewModel();
    
        model.ThongKeDataList = GetThongKeDataFromDatabase();

            return View(model);
        }
    }
}