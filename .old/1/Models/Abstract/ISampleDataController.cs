using System.Collections.Generic;

namespace Statistics.Models.Abstract
{
    public interface ISampleDataController
    {
        IEnumerable<Book> Books { get; }

        //void SaveProject(Book book);
    }
}