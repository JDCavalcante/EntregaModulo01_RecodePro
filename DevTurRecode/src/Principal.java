
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

public class Principal {

	public static void main(String[] args) {
		UsuarioDAO usuarioDAO = new UsuarioDAO();
		Usuario usuario = new Usuario();

		
		//ArrayList<Contato> dados = new ArrayList<>();
		//int aux = 0;
		String nome = new String();
		String email = new String();
		Scanner receba = new Scanner(System.in);
		int opcao, idade, idCli;

		do {
			System.out.println("=========AGENDA ==========");
			System.out.println("1- Cadastro de contato");
			System.out.println("2- Excluir contato");
			System.out.println("3- Mostrar contatos");
			System.out.println("4- Atualizar contato");
			System.out.println("5- Sair");

			opcao = receba.nextInt();

			switch (opcao) {
			case 1: {

				System.out.println("Digite o nome do contato que deseja cadastrar");
				nome = receba.next();
				usuario.setNome(nome);

				System.out.println("Digite o email do contato que deseja cadastrar");
				email = receba.next();
				usuario.setEmail(email);
				
				System.out.println("Digite a idade do contato que deseja cadastrar");
				idade = receba.nextInt();
				usuario.setIdade(idade);
				

				usuarioDAO.save(usuario);

				System.out.println("contato cadastrado");

				break;
			}

			case 2: {

				System.out.println("Digite o identificador do contato que deseja escluir");
				idCli = receba.nextInt();
				usuarioDAO.removeBYId(idCli);

				System.out.println("contato removido");

				break;
			}
			case 3: {

				for (Usuario c : usuarioDAO.getUsuario()) {

					System.out.println("Nome: " + c.getNome());
					
					System.out.println("Email: " + c.getEmail());

					System.out.println("Idade " + c.getIdade());

					System.out.println("--------------------------------------------");

				}

				break;

			}
			case 4: {
				System.out.println("Digite um novo nome do contato que para atuaizar");
				nome = receba.next();
				usuario.setNome(nome);
				
				System.out.println("Digite o identificador do contato que deseja atuaizar");
				idCli= receba.nextInt();
				usuario.setId(idCli);
				

				System.out.println("Digite um novo email do contato que para atuaizar");
				email = receba.next();
				usuario.setEmail(email);
				
				System.out.println("Digite um novo email do contato que para atuaizar");
				idade = receba.nextInt();
				usuario.setIdade(idade);
				
				usuarioDAO.update(usuario);

				System.out.println("contato atualizado");

			}
			case 5: {
				System.out.println("obrigado por usar nossa agenda!");
				break;
			}

			default:
				System.out.println("opcao inexistente por favor degite novamente");
			}

		} while (opcao != 6);

		receba.close();

	}
}








