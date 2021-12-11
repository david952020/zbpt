import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Login {
	static {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	public static Connection getConnection() {
		Connection connection =null;
		try {
			connection=DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/product_db?serverTimezone=GMT", "root", "root");
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return connection;
	}
	public static void main(String[] args) {
		String sql="select * from admin_pwd ";
		Connection connection=getConnection();
		try {
			Statement stmStatement=connection.createStatement();
			ResultSet resultSet=stmStatement.executeQuery(sql);
			while (resultSet.next()) {
					System.out.println(resultSet.getString(1)+'\t'+resultSet.getString(2)+'\t'+resultSet.getString(3)+'\t');
			}
			resultSet.close();
			stmStatement.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				connection.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		System.out.println(getConnection());
		
	}
}
