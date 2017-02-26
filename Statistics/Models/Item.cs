using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Statistics.Models
{
    public class Item
    {
        [Required(ErrorMessage = "Add item name")]
        public string ItemName { get; set; }

        [Required(ErrorMessage = "Add item description")]
        public string ItemDescription { get; set; }
    }
}