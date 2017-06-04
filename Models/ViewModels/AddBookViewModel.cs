using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Statistics.Models.ViewModels
{
    public class AddBookViewModel
    {
        public Book Book { get; set; }

        public List<Author> Authors { get; set; }
    }
}
