using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Statistics.Models;
using Statistics.Models.Concrete;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Statistics.Controllers
{
    public class BooksController : Controller
    {
        private IBookRepository repository;

        public BooksController(IBookRepository repository)
        {
            this.repository = repository;
        }

        public IActionResult Index() => View();

        public IActionResult ViewBooksList() => View(repository.Books);

        public IActionResult EditBook(Book book)
        {
            if (ModelState.IsValid)
            {
                repository.SaveBook(book);

                //todo: configure session here
                //TempData["message"] = $"{book.Name} has been saved";

                return RedirectToAction("Index");
            }

            return View(book);
        }

        public IActionResult AddBook(string name, string desc) => View("EditBook", new Book());
    }
}