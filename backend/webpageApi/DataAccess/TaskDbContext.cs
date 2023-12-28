using Microsoft.EntityFrameworkCore;
namespace webpageApi.DataAccess
{
    public class TaskDbContext : DbContext
    {
        public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options)
        {

        }

        // TODO Add DbSets
        public DbSet<Models.Task>? Tasks { get; set; }

    }
}
