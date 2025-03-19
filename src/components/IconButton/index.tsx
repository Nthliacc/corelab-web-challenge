import React from "react";
import { IconType } from "react-icons"; // Importe o tipo IconType
import styles from "./IconButton.module.scss"; // Importe o arquivo de estilos
// Defina as props do componente IconButton
interface IconButtonProps {
  Icon: IconType; // O ícone será passado como uma prop
  onClick?: () => void; // Função de clique opcional
  size?: number; // Tamanho do ícone (opcional)
  color?: string; // Cor do ícone (opcional)
  className?: string; // Classes CSS adicionais (opcional)
  [key: string]: any; // Permita outras props
}

const IconButton: React.FC<IconButtonProps> = (
  {
    Icon, // Renomeie a prop para Icon (convenção para componentes)
    onClick,
    size = 24,
    color = "#4f4f4f",
    className = "",
  },
  ...rest
) => {
  return (
    <button
      onClick={onClick}
      className={`${className}` + styles.Icon}
      {...rest}
    >
      {/* Renderize o ícone */}
      {Icon && <Icon size={size} color={color} />}
    </button>
  );
};

export default IconButton;
