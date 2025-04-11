import ClientSideOnly from "@/component/ClientSideOnly";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartPageProps {
  title?: string;
  items?: CartItem[];
}

const CartPage: React.FC<CartPageProps> = ({ title = 'Cart Page', items = [] }) => {
  const styles = {
    container: { mt: 2 },
    title: { mt: 2 },
  };

  return (
    <ClientSideOnly>
      <Box sx={styles.container}>
        <Typography variant="h5" component="div" sx={styles.title}>
          {title}
        </Typography>
        {items.length > 0 ? (
          items.map((item) => (
            <Typography key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </Typography>
          ))
        ) : (
          <Typography>Your cart is empty.</Typography>
        )}
      </Box>
    </ClientSideOnly>
  );
};

export default CartPage;