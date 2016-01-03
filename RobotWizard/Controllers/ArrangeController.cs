using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RobotWizard.Models;

namespace RobotWizard.Controllers
{
   public class ArrangeController : Controller
   {
      System.Web.Script.Serialization.JavaScriptSerializer serializer;

      public ActionResult ArrangePlanets()
      {
         var fileContents = System.IO.File.ReadAllText(Server.MapPath(@"~/Content/rules/ArrangeGames/ArrangeThePlanets.txt"));
         Dictionary<string, string[]> gameVariables = GlobalCode.ParseArrangeFile(fileContents);
         ArrangeGame game = new ArrangeGame(gameVariables);
         return View(game);
      }


      public ActionResult Index()
      {
         return View();
      }

   }
}
