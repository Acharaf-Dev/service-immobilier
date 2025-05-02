public function store(Request $request) {
    $request->validate([
        'annonce_id' => 'required|exists:annonces,id',
        'type' => 'required|in:achat,location',
    ]);

    $transaction = Transaction::create([
        'client_id' => auth()->id(),
        'annonce_id' => $request->annonce_id,
        'type' => $request->type,
        'status' => 'en_attente',
    ]);

    return response()->json($transaction);
}
