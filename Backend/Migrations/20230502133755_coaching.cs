using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmailSender.Migrations
{
    /// <inheritdoc />
    public partial class coaching : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Users_UserId",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Orders",
                table: "Orders");

            migrationBuilder.RenameTable(
                name: "Orders",
                newName: "BoostingOrders");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_UserId",
                table: "BoostingOrders",
                newName: "IX_BoostingOrders_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BoostingOrders",
                table: "BoostingOrders",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "CoachingOrders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DiscordName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PlayedLane = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rank = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SessionCount = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SessionsFinished = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoachingOrders", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_BoostingOrders_Users_UserId",
                table: "BoostingOrders",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BoostingOrders_Users_UserId",
                table: "BoostingOrders");

            migrationBuilder.DropTable(
                name: "CoachingOrders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BoostingOrders",
                table: "BoostingOrders");

            migrationBuilder.RenameTable(
                name: "BoostingOrders",
                newName: "Orders");

            migrationBuilder.RenameIndex(
                name: "IX_BoostingOrders_UserId",
                table: "Orders",
                newName: "IX_Orders_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Orders",
                table: "Orders",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Users_UserId",
                table: "Orders",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
