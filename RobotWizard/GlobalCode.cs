using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web;

namespace RobotWizard
{
   public class GlobalCode
   {
      public static Dictionary<string, string[]> ParseArrangeFile(string fileContents)
      {
         Dictionary<string, string[]> dicToReturn = new Dictionary<string, string[]>();

         string[] items = fileContents.Split(new string[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries);

         foreach (var item in items)
         {
            string[] variableKeyAndValues = item.Split('=');
            string key = variableKeyAndValues[0].Trim();
            string[] valuesArray = variableKeyAndValues[1].Split(',');
            dicToReturn.Add(key, valuesArray);
         }

         return dicToReturn;
      }
   }

   public static class JavaScriptConvert
   {
      public static IHtmlString SerializeObject(object value)
      {
         using (var sW = new StringWriter())
         using (var jsonWriter = new JsonTextWriter(sW))
         {
            var serializer = new JsonSerializer
            {
               ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            jsonWriter.QuoteName = false;
            serializer.Serialize(jsonWriter, value);

            return new HtmlString(sW.ToString());
         }
      }
   }

}