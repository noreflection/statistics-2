using System.Collections.Generic;

namespace Statistics.Models
{
    public interface IBookRepository
    {
        IEnumerable<Book> Books { get; }
        void SaveBook(Book book);
    }
}