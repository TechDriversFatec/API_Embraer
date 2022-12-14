#Criando o Banco de Dados da aplicação:

CREATE DATABASE api_embraer;

#Ativando o Banco de Dados para que seja possível criar a esturutra de tabelas:

USE api_embraer;

#Criando a tabela Administrador e suas respectivas colunas:

CREATE TABLE administrator (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    login_acesso VARCHAR(100) NOT NULL,
    senha_acesso VARCHAR(10) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

#Criando a tabela Piloto e suas respectivas colunas:

CREATE TABLE piloto (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    login_acesso VARCHAR(100) NOT NULL,
    senha_acesso VARCHAR(10) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

#Criando a tabela Aeronaves e suas respectivas colunas:

CREATE TABLE aeronaves (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    fabricante VARCHAR(30) NOT NULL,
    motor VARCHAR(30) NOT NULL,
    certificacao VARCHAR(50) NOT NULL,
    qtde_reversor INT NULL,
    peso_referencial INT NOT NULL
);

#Criando a tabela Flap e suas respectivas colunas:

CREATE TABLE flap (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tipo_flap VARCHAR(50) NOT NULL,
    configuracao_freio VARCHAR(50) NOT NULL,
    aeronave_id INT NOT NULL,
    FOREIGN KEY (aeronave_id) REFERENCES aeronaves(id)
);

#Criando a tabela no modo de freio Max Man e suas respectivas colunas:

CREATE TABLE freio_max_manual (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    distancia_referencial INT NOT NULL,
    padrao_variacao_peso INT NOT NULL,
    correcao_peso_acima INT NOT NULL,
    correcao_peso_abaixo INT NOT NULL,
    peso_minimo INT NOT NULL,
    peso_maximo INT NOT NULL,
    padrao_variacao_altitude INT NOT NULL,
    correcao_altitude INT NOT NULL,
    altitude_minima INT NOT NULL,
    altitude_maxima INT NOT NULL,
    padrao_variacao_temperatura INT NOT NULL,
    correcao_temperatura_acima INT NOT NULL,
    correcao_temperatura_abaixo INT NOT NULL,
    temperatura_minima INT NOT NULL,
    temperatura_maxima INT NOT NULL,
    padrao_variacao_vento INT NOT NULL,
    correcao_vento_proa INT NOT NULL,
    correcao_vento_cauda INT NOT NULL,
    vento_vel_minima INT NOT NULL,
    vento_vel_maxima INT NOT NULL,
    padrao_variacao_inclinacao INT NOT NULL,
    correcao_aclive INT NOT NULL,
    correcao_declive INT NOT NULL,
    inclinacao_minima INT NOT NULL,
    inclinacao_maxima INT NOT NULL,
    padrao_variacao_velocidade INT NOT NULL,
    correcao_velocidade_acima INT NOT NULL,
    velocidade_minima INT NOT NULL,
    velocidade_maxima INT NOT NULL,
    correcao_reversor_inoperante INT NOT NULL,
    padrao_variacao_sobrepeso INT NOT NULL,
    correcao_sobrepeso INT NOT NULL,
    flap_id INT NOT NULL,
    FOREIGN KEY (flap_id) REFERENCES flap(id)
);

#Criando a tabela no modo de freio High e suas respectivas colunas:

CREATE TABLE freio_high (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    distancia_referencial INT NOT NULL,
    padrao_variacao_peso INT NOT NULL,
    correcao_peso_acima INT NOT NULL,
    correcao_peso_abaixo INT NOT NULL,
    peso_minimo INT NOT NULL,
    peso_maximo INT NOT NULL,
    padrao_variacao_altitude INT NOT NULL,
    correcao_altitude INT NOT NULL,
    altitude_minima INT NOT NULL,
    altitude_maxima INT NOT NULL,
    padrao_variacao_temperatura INT NOT NULL,
    correcao_temperatura_acima INT NOT NULL,
    correcao_temperatura_abaixo INT NOT NULL,
    temperatura_minima INT NOT NULL,
    temperatura_maxima INT NOT NULL,
    padrao_variacao_vento INT NOT NULL,
    correcao_vento_proa INT NOT NULL,
    correcao_vento_cauda INT NOT NULL,
    vento_vel_minima INT NOT NULL,
    vento_vel_maxima INT NOT NULL,
    padrao_variacao_inclinacao INT NOT NULL,
    correcao_aclive INT NOT NULL,
    correcao_declive INT NOT NULL,
    inclinacao_minima INT NOT NULL,
    inclinacao_maxima INT NOT NULL,
    padrao_variacao_velocidade INT NOT NULL,
    correcao_velocidade INT NOT NULL,
    velocidade_minima INT NOT NULL,
    velocidade_maxima INT NOT NULL,
    correcao_reversor_inoperante INT NOT NULL,
    padrao_variacao_sobrepeso INT NOT NULL,
    correcao_sobrepeso INT NOT NULL,
    flap_id INT NOT NULL,
    FOREIGN KEY (flap_id) REFERENCES flap(id)
);

#Criando a tabela no modo de freio Medium e suas respectivas colunas:

CREATE TABLE freio_medium (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    distancia_referencial INT NOT NULL,
    padrao_variacao_peso INT NOT NULL,
    correcao_peso_acima INT NOT NULL,
    correcao_peso_abaixo INT NOT NULL,
    peso_minimo INT NOT NULL,
    peso_maximo INT NOT NULL,
    padrao_variacao_altitude INT NOT NULL,
    correcao_altitude INT NOT NULL,
    altitude_minima INT NOT NULL,
    altitude_maxima INT NOT NULL,
    padrao_variacao_temperatura INT NOT NULL,
    correcao_temperatura_acima INT NOT NULL,
    correcao_temperatura_abaixo INT NOT NULL,
    temperatura_minima INT NOT NULL,
    temperatura_maxima INT NOT NULL,
    padrao_variacao_vento INT NOT NULL,
    correcao_vento_proa INT NOT NULL,
    correcao_vento_cauda INT NOT NULL,
    vento_vel_minima INT NOT NULL,
    vento_vel_maxima INT NOT NULL,
    padrao_variacao_inclinacao INT NOT NULL,
    correcao_aclive INT NOT NULL,
    correcao_declive INT NOT NULL,
    inclinacao_minima INT NOT NULL,
    inclinacao_maxima INT NOT NULL,
    padrao_variacao_velocidade INT NOT NULL,
    correcao_velocidade INT NOT NULL,
    velocidade_minima INT NOT NULL,
    velocidade_maxima INT NOT NULL,
    correcao_reversor_inoperante INT NOT NULL,
    padrao_variacao_sobrepeso INT NOT NULL,
    correcao_sobrepeso INT NOT NULL,
    flap_id INT NOT NULL,
    FOREIGN KEY (flap_id) REFERENCES flap(id)
);

#Criando a tabela no modo de freio Low e suas respectivas colunas:

CREATE TABLE freio_low (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    distancia_referencial INT NOT NULL,
    padrao_variacao_peso INT NOT NULL,
    correcao_peso_acima INT NOT NULL,
    correcao_peso_abaixo INT NOT NULL,
    peso_minimo INT NOT NULL,
    peso_maximo INT NOT NULL,
    padrao_variacao_altitude INT NOT NULL,
    correcao_altitude INT NOT NULL,
    altitude_minima INT NOT NULL,
    altitude_maxima INT NOT NULL,
    padrao_variacao_temperatura INT NOT NULL,
    correcao_temperatura_acima INT NOT NULL,
    correcao_temperatura_abaixo INT NOT NULL,
    temperatura_minima INT NOT NULL,
    temperatura_maxima INT NOT NULL,
    padrao_variacao_vento INT NOT NULL,
    correcao_vento_proa INT NOT NULL,
    correcao_vento_cauda INT NOT NULL,
    vento_vel_minima INT NOT NULL,
    vento_vel_maxima INT NOT NULL,
    padrao_variacao_inclinacao INT NOT NULL,
    correcao_aclive INT NOT NULL,
    correcao_declive INT NOT NULL,
    inclinacao_minima INT NOT NULL,
    inclinacao_maxima INT NOT NULL,
    padrao_variacao_velocidade INT NOT NULL,
    correcao_velocidade INT NOT NULL,
    velocidade_minima INT NOT NULL,
    velocidade_maxima INT NOT NULL,
    correcao_reversor_inoperante INT NOT NULL,
    padrao_variacao_sobrepeso INT NOT NULL,
    correcao_sobrepeso INT NOT NULL,
    flap_id INT NOT NULL,
    FOREIGN KEY (flap_id) REFERENCES flap(id)
);

#Criando a tabela para armazenamento dos inputs dos cálculos realizados:

CREATE TABLE calculo_distancia (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    input_flap VARCHAR(50) NOT NULL,
    input_aeronave VARCHAR(30) NOT NULL,
    input_peso INT NOT NULL,
    input_altitude INT NOT NULL,
    input_temperatuda DECIMAL (3,1) NOT NULL,
    input_inclinacao INT NOT NULL,
    input_velocidade INT NOT NULL,
    input_condicao_vento INT NOT NULL,
    input_velocidade_vento INT NOT NULL,
    input_reversor INT,
    resultado_calculo DECIMAL(6,1)
);

#Comando para excluir o Banco de Dados:

DROP DATABASE api_embraer;

#Comando para inserção de dados nas colunas da tabela Aeronaves para teste de armazenamento:

INSERT INTO `aeronaves` (`modelo`,`fabricante`,`motor`, `certificacao`,`qtde_reversor`,`peso_referencial`) VALUES ("EBR E190","Embraer","BRT15032E","ANAC",2,40000);
INSERT INTO `aeronaves` (`modelo`,`fabricante`,`motor`, `certificacao`,`qtde_reversor`,`peso_referencial`) VALUES ("EBR 158AF","Embraer","EFGT2023","ANAC / AIRBUS",0,52300);

#Comando para selecionar e exibir todos os elementos da tabela Aeronaves:

SELECT * FROM aeronaves;
