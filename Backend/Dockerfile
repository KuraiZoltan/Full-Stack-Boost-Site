
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 7196

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["EmailSender.csproj", "."]
RUN dotnet restore "./EmailSender.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "EmailSender.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "EmailSender.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ["dotnet", "ef", "database", "update"]
ENTRYPOINT ["dotnet", "EmailSender.dll"]
