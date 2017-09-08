using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Statistics.Models.Abstract
{
    interface IChapterRepository
    {
        IEnumerable<Book> Books { get; }
        void SaveBook(Book book);
    }
}
