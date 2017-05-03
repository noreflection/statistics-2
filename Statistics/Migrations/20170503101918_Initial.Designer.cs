using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Statistics.Models;

namespace Statistics.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20170503101918_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Statistics.Models.Book", b =>
                {
                    b.Property<int>("BookId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int?>("ProjectId");

                    b.HasKey("BookId");

                    b.HasIndex("ProjectId");

                    b.ToTable("Books");
                });

            modelBuilder.Entity("Statistics.Models.Chapter", b =>
                {
                    b.Property<int>("ChapterId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("BookId");

                    b.Property<int>("ChapterEndPage");

                    b.Property<string>("ChapterName");

                    b.Property<int>("ChapterStartPage");

                    b.HasKey("ChapterId");

                    b.HasIndex("BookId");

                    b.ToTable("Chapters");
                });

            modelBuilder.Entity("Statistics.Models.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("Name");

                    b.Property<DateTime>("StartDate");

                    b.HasKey("ProjectId");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("Statistics.Models.Book", b =>
                {
                    b.HasOne("Statistics.Models.Project")
                        .WithMany("Books")
                        .HasForeignKey("ProjectId");
                });

            modelBuilder.Entity("Statistics.Models.Chapter", b =>
                {
                    b.HasOne("Statistics.Models.Book")
                        .WithMany("Chapters")
                        .HasForeignKey("BookId");
                });
        }
    }
}
