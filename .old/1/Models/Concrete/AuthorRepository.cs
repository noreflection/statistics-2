using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Statistics.Models.Abstract;

namespace Statistics.Models.Concrete
{
    public class AuthorRepository:IAuthorRepository
    {
        private ApplicationDbContext context { get; }

        public AuthorRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<Author> Authors => context.Authors;
    }
}
