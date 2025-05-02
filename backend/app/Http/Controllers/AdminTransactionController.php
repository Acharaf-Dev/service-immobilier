namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class AdminTransactionController extends Controller
{
    public function listPending()
    {
        return Transaction::with(['property', 'client'])
            ->where('status', 'en_attente')
            ->get();
    }

    public function validateTransaction($id)
    {
        $transaction = Transaction::findOrFail($id);
        $transaction->status = 'valide';
        $transaction->save();

        return response()->json(['message' => 'Transaction validée.']);
    }

    public function rejectTransaction($id)
    {
        $transaction = Transaction::findOrFail($id);
        $transaction->status = 'rejete';
        $transaction->save();

        return response()->json(['message' => 'Transaction rejetée.']);
    }
}
