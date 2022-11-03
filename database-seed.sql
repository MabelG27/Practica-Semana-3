CREATE TABLE Clientes
(
    Id_Cli SERIAL,
    Nombre text,
    Apellido text,
    CONSTRAINT Clientes PRIMARY KEY (Id_Cli)
);

INSERT INTO Clientes(Nombre, Apellido) VALUES
 ('Mabel', 'Garcia'),
 ('Maria', 'Perez');

