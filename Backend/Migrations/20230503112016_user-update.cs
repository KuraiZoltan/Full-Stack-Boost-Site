using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmailSender.Migrations
{
    /// <inheritdoc />
    public partial class userupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "BoostingOrders");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Users",
                newName: "DiscordName");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "BoostingOrders",
                newName: "DiscordName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DiscordName",
                table: "Users",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "DiscordName",
                table: "BoostingOrders",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "BoostingOrders",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
