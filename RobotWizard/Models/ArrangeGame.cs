using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Web;
using System.Security.Cryptography;

namespace RobotWizard.Models
{
   public class ArrangeGame
   {
      public string[] correctOrder;
      public string[] currentOrder;
      public ArrangeObject[] objects;
      public string[] winList;
      public string[] failList;
      public string[] additionalInfo;
      public string title;
      public string instructions;
      public string background;
      public string nextGame;


      public ArrangeGame(Dictionary<string, string[]> variables)
      {
         try
         {
            winList = System.IO.File.ReadLines("C:/Content/lists/win.txt").ToArray();
            failList = System.IO.File.ReadLines("C:/Content/lists/fail.txt").ToArray();
            correctOrder = variables["correctOrder"];
            title = String.Join("", variables["title"]);
            background = @"../Content/images/backgrounds/" + variables["background"][0];
            instructions = String.Join("", variables["instructions"]);

            if (variables.ContainsKey("nextGame"))
            {
               nextGame = variables["nextGame"][0];
            }

            List<ArrangeObject> objectsList = new List<ArrangeObject>();

            foreach (var obj in variables["objects"])
            {
               objectsList.Add(new ArrangeObject(obj.Substring(0, obj.IndexOf(".")), obj));
            }

            if (variables.ContainsKey("additionalInfo"))
            {
               additionalInfo = variables["additionalInfo"];
            }

            objects = objectsList.ToArray();
            mixObjectsUp();
         }
         catch (Exception e)
         {
            string What = e.Message;
         }
      }

      private void mixObjectsUp()
      {
         List<string> tempList = new List<string>();

         RNGCryptoServiceProvider rnd = new RNGCryptoServiceProvider();
         objects = objects.OrderBy(x => GetNextInt32(rnd)).ToArray();

         foreach (var obj in objects)
         {
            tempList.Add(obj.name);
         }

         currentOrder = tempList.ToArray();
      }

      static int GetNextInt32(RNGCryptoServiceProvider rnd)
      {
         byte[] randomInt = new byte[4];
         rnd.GetBytes(randomInt);
         return Convert.ToInt32(randomInt[0]);
      }
   }

   public class ArrangeObject
   {
      public string name;
      public string image;

      public ArrangeObject(string name, string image)
      {
         this.name = name;
         this.image = image;
      }
   }
}