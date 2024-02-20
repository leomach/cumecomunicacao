import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Cume Comunicação | Criação de sites',
    template: '%s | Cume',
  },
  description: 'Agência de criação de sites de alto padrão de excelência',
  generator: 'Cume Comunicação',
  applicationName: 'Site da Cume',
  keywords: [
    'empresa de marketing digital',
    'site institucional',
    'criação de sites profissionais',
    'landing page',
    'criação de sites',
    'criação de site',
    'empresa de criação de sites',
    'criação de site profissional',
    'agencia de criação de sites',
    'site marketing digital',
    'site para empresa',
    'sites profissionais',
    'site profissional',
    'construção de sites',
    'desenvolvedor de site',
    'desenvolvimento de sites profissionais',
    'criação de website',
    'agencia criação de sites',
    'site empresarial',
    'criação site',
    'empresa de site',
    'preciso de um site',
    'site para vendas',
    'construção de site',
    'criação de site institucional',
    'empresa de sites',
    'empresa criação de sites',
    'agencia web',
    'agencia site',
    'site de empresa',
    'agencia de site',
    'empresa de criação de site',
    'criação site profissional',
    'sites institucionais',
    'desenvolvimento site',
    'criação sites',
    'site landing page',
    'desenvolvimento de site institucional',
    'desenvolvimento de website',
    'produção de site',
    'criação de um site',
    'desenvolvimento de sites',
  ],
  formatDetection: {
    email: 'cttleandromachado@gmail.com',
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
