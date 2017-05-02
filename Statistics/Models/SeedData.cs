using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Statistics.Models
{
    public class SeedData
    {
        public static void EnsurePoppulated(IApplicationBuilder application)
        {
            ApplicationDbContext context = application.ApplicationServices.GetRequiredService<ApplicationDbContext>();

            if (!context.Books.Any())
            {
                context.Books.AddRange(
                    new Book { ItemName = "testBook1Name", ItemDescription = "testBook1Description" },
                    new Book { ItemName = "testBook2Name", ItemDescription = "testBook2Description" }
                );
                context.SaveChanges();
            }
        }
    }
}