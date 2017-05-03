﻿using System;
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
                    new Book { Name = "testBook1Name", Description = "testBook1Description" },
                    new Book { Name = "testBook2Name", Description = "testBook2Description" }
                );
                context.SaveChanges();
            }
        }
    }
}