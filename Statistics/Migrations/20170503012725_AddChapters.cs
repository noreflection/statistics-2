using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Statistics.Migrations
{
    public partial class AddChapters : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Chapter1",
                table: "Books",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Chapter2",
                table: "Books",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Chapter1",
                table: "Books");

            migrationBuilder.DropColumn(
                name: "Chapter2",
                table: "Books");
        }
    }
}
