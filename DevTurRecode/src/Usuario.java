import java.util.Date;

public class Usuario {
	private int idCli;
	private String nome, email;
	private int idade;
	
	public int getIdCli() {
		return idCli; 
	}		
	public void setId(int idCli){
		this.idCli = idCli;
	}
	public String getEmail() {
		return email; 
	}		
	public void setEmail(String email){
		this.email = email;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}
	
}
