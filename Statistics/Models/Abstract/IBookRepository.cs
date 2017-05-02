using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Statistics.Models
{
    public interface IBookRepository
    {
        IEnumerable<Book> Books { get;}
    }
}