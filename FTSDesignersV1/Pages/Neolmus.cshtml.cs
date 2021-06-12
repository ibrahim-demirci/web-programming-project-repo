using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FTSDesignersV1.Pages
{
    public class NeolmusModel : PageModel
    {
        [BindProperty]
        public string Gun { get; set; }

        [BindProperty]
        public string Ay { get; set; }

        [BindProperty]
        public string Text { get; set; }

        public void OnGet()
        {
           
        }
        public void OnPost()
        {
            Gun=Request.Form["day"];
            Ay=Request.Form["month"];
            string Url = string.Concat("http://numbersapi.com/", Ay, "/", Gun, "/date?json");
            string Json = new WebClient().DownloadString(Url);
            JsonString obj = JsonSerializer.Deserialize<JsonString>(Json);
            Text = obj.text;
        }

        public class JsonString
        {
            public string text { get; set; }
            public int year { get; set; }
            public int number { get; set; }
            public Boolean found { get; set; }
            public string type { get; set; }
        }
    }
}
