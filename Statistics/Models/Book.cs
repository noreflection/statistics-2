using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Statistics.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        //[Required(ErrorMessage = "Add item name")]
        public string Name { get; set; }

        //todo: bound chapter table
        public string Chapter1 { get; set; }

        public string Chapter2 { get; set; }

        //[Required(ErrorMessage = "Add item description")]
        public string Description { get; set; }

    }
}