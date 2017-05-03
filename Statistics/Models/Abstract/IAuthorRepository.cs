using System.Collections.Generic;

namespace Statistics.Models.Abstract
{
    public interface IAuthorRepository
    {
        IEnumerable<Author> Authors { get; }
    }
}