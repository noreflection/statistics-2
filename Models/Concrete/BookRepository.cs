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

        public void SaveBook(Book book)
        {
            if (book.BookId == 0)
            {
                context.Books.Add(book);
            }
            else
            {
                Book dbEntry = context.Books.FirstOrDefault(b => b.BookId == book.BookId);

                if (dbEntry != null)
                {
                    dbEntry.Name = book.Name;
                    dbEntry.Description = book.Description;
                }
            }
            context.SaveChanges();
        }
    }
}
