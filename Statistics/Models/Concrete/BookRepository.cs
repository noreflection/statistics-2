using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Statistics.Models.Concrete
{
    public class BookRepository : IBookRepository
    {
        private ApplicationDbContext context { get; }

        public BookRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<Book> Books => context.Books;
    }
}
