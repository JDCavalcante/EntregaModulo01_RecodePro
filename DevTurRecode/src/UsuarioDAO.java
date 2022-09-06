import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {

	Connection conn = null;
	PreparedStatement pstm = null;

	public void save(Usuario contato) {

		// Isso é uma sql comum, os ? são os parâmetros que nós vamos adicionar na base
		// de dados

		String sql = "INSERT INTO cliente(nome,email,idade)" + " VALUES(?,?,?)";

		try {
			// Cria uma conexão com o banco
			conn = Conexao.createConnectionToMySQL();

			// Cria um PreparedStatment, classe usada para executar a query
			pstm = conn.prepareStatement(sql);

			// Adiciona o valor do primeiro parâmetro da sql
			pstm.setString(1, contato.getNome());
			// Adiciona o valor do primeiro parâmetro da sql
			pstm.setString(2, contato.getEmail());
			// Adicionar o valor do segundo parâmetro da sql
			pstm.setInt(3, contato.getIdade());


			// Executa a sql para inserção dos dados
			pstm.execute();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// Fecha as conexões
			try {
				if (pstm != null) {

					pstm.close();
				}

				if (conn != null) {
					conn.close();
				}

			} catch (Exception e) {

				e.printStackTrace();
			}
		}

	}

	public void removeBYId(int id) {
		String sql = "DELETE FROM cliente WHERE id = ?";

		try {
			conn = Conexao.createConnectionToMySQL();

			pstm = conn.prepareStatement(sql);

			pstm.setInt(1, id);

			pstm.execute();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstm != null) {

					pstm.close();
				}

				if (conn != null) {
					conn.close();
				}

			} catch (Exception e) {

				e.printStackTrace();
			}
		}
	}
	
	
	public Usuario searchBYId(int id) {
		ResultSet rset = null;
		Usuario contato = new Usuario();
		String sql = "SELECT *FROM cliente WHERE id = ?";

		try {
			conn = Conexao.createConnectionToMySQL();

			pstm = conn.prepareStatement(sql);

			pstm.setInt(1, id);
			
			rset = pstm.executeQuery();
			
			while (rset.next()) {

				

				// Recupera o id do banco e atribui ele ao objeto
				contato.setId(rset.getInt("idCli"));
				
				// Recupera o nome do banco e atribui ele ao objeto
				contato.setEmail(rset.getString("email"));

				// Recupera o nome do banco e atribui ele ao objeto
				contato.setNome(rset.getString("nome"));

				// Recupera a idade do banco e atribui ele ao objeto
				contato.setIdade(rset.getInt("idade"));

			

				
			}

			pstm.execute();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstm != null) {

					pstm.close();
				}

				if (conn != null) {
					conn.close();
				}

			} catch (Exception e) {

				e.printStackTrace();
			}
		}
		return contato;
	}

	public void update(Usuario contato) {
		String sql = "UPDATE cliente SET email=?, nome = ?, idade = ? " + "WHERE id = ?";
		try {

			conn = Conexao.createConnectionToMySQL();
			pstm = conn.prepareStatement(sql);
			pstm.setString(1, contato.getEmail());
			pstm.setString(2, contato.getNome());
			pstm.setInt(3, contato.getIdade());
			pstm.setInt(4, contato.getIdCli());

			pstm.execute();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// Fecha as conexões
			try {
				if (pstm != null) {

					pstm.close();
				}

				if (conn != null) {
					conn.close();
				}

			} catch (Exception e) {

				e.printStackTrace();
			}
		}

	}

	public List<Usuario> getUsuario() {

		String sql = "SELECT * FROM cliente";

		List<Usuario> contatos = new ArrayList<Usuario>();

		// Classe que vai recuperar os dados do banco de dados
		ResultSet rset = null;

		try {
			conn = Conexao.createConnectionToMySQL();

			pstm = conn.prepareStatement(sql);

			rset = pstm.executeQuery();

			// Enquanto existir dados no banco de dados, faça
			while (rset.next()) {

				Usuario contato = new Usuario();

				// Recupera o id do banco e atribui ele ao objeto
				contato.setId(rset.getInt("idCli"));
				
				// Recupera o nome do banco e atribui ele ao objeto
				contato.setEmail(rset.getString("email"));

				// Recupera o nome do banco e atribui ele ao objeto
				contato.setNome(rset.getString("nome"));

				// Recupera a idade do banco e atribui ele ao objeto
				contato.setIdade(rset.getInt("idade"));

				// Adiciono o contato recuperado, a lista de contatos
				contatos.add(contato);
			}
		} catch (Exception e) {

			e.printStackTrace();
		} finally {

			try {

				if (rset != null) {

					rset.close();
				}

				if (pstm != null) {

					pstm.close();
				}

				if (conn != null) {
					conn.close();
				}

			} catch (Exception e) {

				e.printStackTrace();
			}
		}

		return contatos;
	}

}
