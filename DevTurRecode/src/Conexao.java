import java.sql.Connection;
import java.sql.DriverManager;

public class Conexao {
	//Nome do usuário do mysql
	public static final String USERNAME = "root";
	
	//Senha do usuário do mysql
	private static final String PASSWORD = "1234";
	
	//dados do caminho, porta e nome da base de dados que irá ser feita a conexão
	private static final String DATABASE_URL = "jdbc:mysql://localhost:3306/DevTur";
	
	//Cria uma conexão com o banco de dados MySql utilizando o nome de usuário e senha fornecidos
	public static Connection createConnectionToMySQL() throws Exception {

		//Cria uma conexão com o banco de dados
		Connection connection = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
		
		return connection;
	}
}
