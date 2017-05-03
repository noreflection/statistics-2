using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Statistics.Models;

namespace Statistics.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20170503093116_AddColumnsToProjects")]
    partial class AddColumnsToProjects
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Statistics.Models.Book", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Chapter1");

                    b.Property<string>("Chapter2");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int?>("ProjectId");

                    b.HasKey("Id");

                    b.HasIndex("ProjectId");

                    b.ToTable("Books");
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
        }
    }
}
