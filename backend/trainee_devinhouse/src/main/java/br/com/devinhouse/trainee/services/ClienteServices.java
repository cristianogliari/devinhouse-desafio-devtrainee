package br.com.devinhouse.trainee.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.trainee.entities.Cliente;
import br.com.devinhouse.trainee.repositories.ClienteRepository;

@Service
public class ClienteServices {

	@Autowired
	private ClienteRepository clienteRepository;
	
	// Todos os clientes
	protected List<Cliente> findAllClients(){
		return clienteRepository.findAll();
	}
	
	// Validar quantidade de digitos do CPF
	protected boolean validateCPF(String cpf) {
		boolean isValid = cpf.length() == 11;
		
		return isValid;
	}
	
	// Localizar cliente atraves do CPF
	protected Cliente foundClientByCPF(String cpf) {
		Cliente foundClient = new Cliente();
		List<Cliente> allClients = findAllClients();
		
		for(Cliente each : allClients) {
			if(cpf.equals(each.getCpf())) {
				foundClient = each;
			}
		}
		
		return foundClient;
	}
	
	// Verifica se o CPF esta cadastrado
	protected boolean cpfIsActive(String cpf) {
		boolean status = false;
		Cliente foundClient = foundClientByCPF(cpf);
		
		if (cpf.equals(foundClient.getCpf())) {
			status = true;
		}
		
		return status;
	}
	
	// Cadastra cliente;
	public Cliente create(Cliente obj) {
		Cliente clientObj = new Cliente();
		
		if(validateCPF(obj.getCpf())) {
			clienteRepository.save(obj);
			clientObj = foundClientByCPF(obj.getCpf());
			
			return clientObj;
		} throw new RuntimeException("Verifique a quantidade de digitos do CPF");
	}
	
	// Busca todos os clientes;
	public List<Cliente> getAll(){
		return findAllClients();
	}
	
	// Busca um cliente baseado no seu CPF
	public Cliente getByCPFKey(String cpf) {
		if (cpfIsActive(cpf)) {
			return foundClientByCPF(cpf);
		} throw new RuntimeException("CPF nao encontrado");
	}
		
	// Atualiza os atributos de um cliente baseado no seu CPF
	public Cliente updateClientByCPF(String cpf, Cliente newObj) {
		if (cpfIsActive(cpf)) {
			Cliente filteredClient = foundClientByCPF(cpf);
			
			if (newObj.getNome() != null) {
				filteredClient.setNome(newObj.getNome());
			}
			if (newObj.getSobrenome() != null) {
				filteredClient.setSobrenome(newObj.getSobrenome());
			}
			if (newObj.getBirthYear() != null) {
				filteredClient.setBirthYear(newObj.getBirthYear());
			}
			
			return clienteRepository.save(filteredClient);
		} throw new RuntimeException("Nao foi possivel atualizar o cliente, CPF nao encontrado");		
	}

	// Remove um cliente baseado no seu CPF
	public List<Cliente> delete(String cpf) {
		if (cpfIsActive(cpf)) {
			Cliente filteredClient = foundClientByCPF(cpf);
			clienteRepository.delete(filteredClient);
			
			return findAllClients();		
		} throw new RuntimeException("Nao foi possivel remover o cliente, CPF nao encontrado");
	}
}